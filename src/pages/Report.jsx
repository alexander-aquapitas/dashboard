import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, ContextMenu, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Report = () => {
  return (
    <div className="m-2 md-m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Report" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {... item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, ContextMenu, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Report