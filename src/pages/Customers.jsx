import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header} from '../components'

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Table" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        width="auto"
        >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {... item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers