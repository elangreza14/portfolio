import React, { useState } from 'react'
import Image from 'next/image'
import { TdGlobal, TrGlobal } from '../../../atoms'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { BsPencil } from 'react-icons/bs'
import Styles from './styles/RenderTableRowProduct.module.css'
import { animated } from 'react-spring'

const RenderTableRowProduct = ({
  prd,
  index,
  setOpenModalVariant,
  setVariantGetLink,
  setOpenModalProduct,
  setLinkProductDetail,
  setLinkGalleries,
  setOpenModalGalleries,
  setCurrentIdGalleries,
  handleProductStatus
  // setItems
}) => {
  // "brand": "VARKA SHOES",
  // "name": "Sepatu Pria - V 155",
  // "sku": "V 155",
  // "photo": "https://s3.ap-southeast-1.amazonaws.com/s4.bandros.co.id/produk/NEW 2019/varka/v-155 (1).jpg",
  // "status": "published"
  // { id: 0, name: 'Brand' },
  // { id: 1, name: 'Name' },
  // { id: 2, name: 'SKU' },
  // { id: 3, name: 'Status' },
  // { id: 4, name: 'Photo' }

  const [openUpdate, setOpenUpdate] = useState(false)
  const [openUpdateTwo, setOpenUpdateTwo] = useState(false)

  // const props = useSpring({
  //   to: [{opacity: 1}, {opacity: 0}],
  //   from: {opacity: 0}
  // })

  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal fontSize={'1.4vmin'}>{prd?.id}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        {prd?.brand ? prd?.brand : <h4 style={{ margin: 0 }}>-</h4>}
      </TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{prd?.name}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{prd?.sku}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>{prd?.status}</TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        {prd?.photo ? (
          <Image src={prd?.photo} width={160} height={160} />
        ) : (
          <h4
            style={{
              margin: 0
            }}
          >
            -
          </h4>
        )}
      </TdGlobal>
      <TdGlobal fontSize={'1.4vmin'}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: '100%',
            maxHeight: 160
          }}
        >
          <div className={Styles.dropdown_action}>
            <button
              onFocus={() => setOpenUpdate(true)}
              onBlur={() => setOpenUpdate(false)}
            >
              <BsPencil />
            </button>
            <animated.div
              className={Styles.dropdown_action_group}
              style={{ height: openUpdate === true ? 90 : 0 }}
            >
              <button
                type="button"
                onClick={() => {
                  setOpenModalProduct(true)
                  setLinkProductDetail(`/product/get/${prd?.id}`)
                }}
                className={Styles.dropdown_action_ind}
              >
                Update Product
              </button>
              <button
                type="button"
                onClick={() => {
                  setOpenModalVariant(true)
                  // setVariantGetLink(`product-variant/?product_id=${prd?.id}`)
                  setVariantGetLink({ product_id: prd?.id })
                }}
                className={Styles.dropdown_action_ind}
              >
                Update Variant
              </button>
              <button
                type="button"
                onClick={() => {
                  // setItems([])
                  setCurrentIdGalleries(prd?.id)
                  setLinkGalleries(`/product/galleries/get/${prd?.id}`)
                  setOpenModalGalleries(true)
                }}
                className={Styles.dropdown_action_ind}
              >
                Update Galleries
              </button>
            </animated.div>
          </div>
          <div style={{ margin: 5 }} />

          <div className={Styles.dropdown_action_dua}>
            <button
              onFocus={() => setOpenUpdateTwo(true)}
              onBlur={() => setOpenUpdateTwo(false)}
            >
              <HiOutlineDotsVertical />
            </button>
            <animated.div
              className={Styles.dropdown_action_group_dua}
              style={{ height: openUpdateTwo === true ? 30 : 0 }}
            >
              <button
                type="button"
                onClick={() =>
                  handleProductStatus({
                    status:
                      prd?.status === 'unpublished' ? 'Publish' : 'Unpublish',
                    id: prd?.id
                  })
                }
                className={Styles.dropdown_action_ind_dua}
              >
                {prd?.status === 'unpublished' ? 'Publish' : 'Unpublish'}
              </button>
            </animated.div>
          </div>
        </div>
      </TdGlobal>
    </TrGlobal>
  )
}

export default React.memo(RenderTableRowProduct)
