import React, { useRef } from 'react'
import { ButtonActionWithoutTip } from '../atoms'
import {
  AiOutlineCloudUpload,
  AiOutlineFileAdd,
  AiOutlineMinusSquare
} from 'react-icons/ai'
import {
  ConvertBase64
  // , resizeFile
} from '../../utils'

const ImageUpload = ({
  index,
  setfieldvalue,
  arrayHelpers,
  maxphoto,
  values,
  name,
  enableminus
}) => {
  const _validasiUpload = e => {
    let fileName = e?.target?.files[0]?.name
    if (/.(jpg|png|jpeg)/g.test(fileName)) {
      return true
    } else {
      e.target.value = null
      return false
    }
  }
  const photoRef = useRef()
  return (
    <>
      <input
        type="file"
        // ref={photoRef}
        ref={photoRef}
        id={`${name}.${index}`}
        name={`${name}.${index}`}
        className="form-control file"
        onChange={async event => {
          if (_validasiUpload(event)) {
            const file = event.target.files[0]
            const image = await ConvertBase64(file)
            setfieldvalue(`${name}.${index}`, image)
          } else {
            setfieldvalue(`${name}.${index}`, '')
          }
        }}
        hidden
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 100,
          marginTop: 5
        }}
      >
        {index !== 0 && enableminus === true && (
          <ButtonActionWithoutTip
            icon={<AiOutlineMinusSquare />}
            onClick={() => arrayHelpers.remove(index)}
          />
        )}
        <ButtonActionWithoutTip
          icon={<AiOutlineCloudUpload />}
          type="button"
          onClick={() => photoRef.current.click()}
        />
        {index + 1 < maxphoto && values[name].length !== maxphoto && (
          <ButtonActionWithoutTip
            icon={<AiOutlineFileAdd />}
            onClick={() => arrayHelpers.push('')}
          />
        )}
      </div>
    </>
  )
}

export default ImageUpload
