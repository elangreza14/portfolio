import { ErrorMessage, Field } from 'formik'
import React, { useState } from 'react'
import { FormatUang } from '../../../../utils'
import { ButtonActionWithoutTip, TdGlobal, TrGlobal } from '../../../atoms'
import TextError from '../../../molecules/TextError'

const RenderTableRowVariant = ({
  prd,
  index,
  values,
  setOpenModalEditVariant,
  setDataEditVariantProduct
}) => {
  const [valueInput, setValueInput] = useState(values[index]?.stock)

  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal>{prd?.id}</TdGlobal>
      <TdGlobal>{prd?.publish}</TdGlobal>
      <TdGlobal>{FormatUang(prd?.reseller_price)}</TdGlobal>
      <TdGlobal>{FormatUang(prd?.purchase_price)}</TdGlobal>
      <TdGlobal>
        {/* {prd?.stock} */}

        {/* <div> */}
        {/* <Field
          name={`${index}.stock`}
          placeholder="Stock"
          // type="text"
          className="form-control-exsmall"
          type="text"
        /> */}
        <Field name={`${index}.stock`}>
          {({ form }) => {
            const { setFieldValue } = form
            return (
              <input
                // name={`${index}.stock`}
                placeholder="Stock"
                className="form-control-exsmall"
                type="number"
                value={valueInput}
                onChange={e => {
                  setValueInput(e.target.value)
                  setFieldValue(`${index}.stock`, parseInt(e.target.value))
                }}
              />
            )
          }}
        </Field>
        <ErrorMessage component={TextError} name={`${index}.stock`} />
        {/* </div> */}
      </TdGlobal>
      <TdGlobal>{prd?.variant_1}</TdGlobal>
      <TdGlobal>{prd?.variant_2}</TdGlobal>
      <TdGlobal>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ButtonActionWithoutTip
            type="button"
            title="Edit"
            // width="125px"
            variant="rilo"
            onClick={() => {
              setOpenModalEditVariant(true)
              setDataEditVariantProduct({
                product_variant_id: prd?.id
              })
            }}
          />
        </div>
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowVariant)
