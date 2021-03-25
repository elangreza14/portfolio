import React from 'react'
import { PortoData } from '../../assets/data'
import { BoxIcon } from '../../components/molecules'
import { PagesHeadTitle } from '../../components/template'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  return (
    <PagesHeadTitle>
      <div
        style={{
          maxHeight: '40vh'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h2 style={{ margin: 0, padding: 30 }}>Project List</h2>
        </div>
        <div
          style={{
            // margin: 30,
            width: '100%',
            height: '70vh',
            maxHeight: '70vh',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            flexFlow: 'wrap'
          }}
        >
          {PortoData.map((x, index) => {
            //   const a = x[0]
            //   const Icon = StatusList.find(x => x.c == a)?.i
            return (
              <div key={index} style={{ width: '45%' }}>
                <div key={index} style={{ width: '90%' }}>
                  <BoxIcon
                    value={x.year}
                    title={x.title}
                    icon={x.images[0]}
                    action={() => router.push(`/project/${x.id}`)}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </PagesHeadTitle>
  )
}

export default Index
