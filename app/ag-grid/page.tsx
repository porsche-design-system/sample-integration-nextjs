"use client";

import { PLinkPure } from '@porsche-design-system/components-react/ssr';
import { pdsTheme } from '@porsche-design-system/components-react/ag-grid';
import { AllCommunityModule, type ColDef, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

ModuleRegistry.registerModules([AllCommunityModule]);

export type DataAdvanced = {
    imageUrl: string;
    model: string;
    date: string;
    interest: string;
    vin: string;
    purchaseIntention: string;
    status: string;
    comment: string;
    leadId: string;
};

const dataAdvanced: DataAdvanced[] = [
    {
        imageUrl: '/718.png',
        model: '718',
        date: '23.06.2021',
        interest: 'New Car',
        vin: '1FM5K7F84FGB16304',
        purchaseIntention: '08/2021',
        status: 'Won',
        comment: '-',
        leadId: '0000824402',
    },
    {
        imageUrl: '/panamera.png',
        model: 'Panamera',
        date: '19.06.2021',
        interest: 'New Car',
        vin: '2GCEC13T141374801',
        purchaseIntention: '11/2021',
        status: 'Lost',
        comment: 'Some multiline text and a column with a min width.',
        leadId: '0000824409',
    },
    {
        imageUrl: '/911.png',
        model: '911',
        date: '19.05.2021',
        interest: 'Used Car',
        vin: '5GAKVCKD8EJ335750',
        purchaseIntention: '09/2021',
        status: 'Won',
        comment: '-',
        leadId: '0000824408',
    },
    {
        imageUrl: '/macan.png',
        model: 'Macan',
        date: '10.05.2021',
        interest: 'Used Car',
        vin: '1FMPU17L83LC09302',
        purchaseIntention: '07/2021',
        status: 'Lost',
        comment: '-',
        leadId: '0000824407',
    },
    {
        imageUrl: '/taycan.png',
        model: 'Taycan',
        date: '03.05.2021',
        interest: 'New Car',
        vin: 'JN1BY1AR3BM375187',
        purchaseIntention: '05/2021',
        status: 'Won',
        comment: '-',
        leadId: '0000824406',
    },
];

type ColumnDefs = DataAdvanced & {
    active: boolean;
};

const ImageUrlRendererer = ({ value }: { value: string }) => {
    return (
        <span
            style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
      <img
          src={value}
          style={{
              objectFit: 'contain',
          }}
          width="80"
          height="45"
          alt=""
      />
    </span>
    );
};

const ButtonRenderer = ({ data }: { data: any }) => {
    return (
        <span
            style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
      <PLinkPure
          underline={true}
          target="_blank"
          href={'https://www.porsche.com/germany/models/' + data.model.toLowerCase()}
      >
        More information
      </PLinkPure>
    </span>
    );
};

const rowData = dataAdvanced.map((row, index) => ({ active: Boolean(index % 2) /* odd rows */, ...row }));

const columnDefs: ColDef<ColumnDefs>[] = [
    {
        field: 'active',
        width: 170,
    },
    {
        field: 'imageUrl',
        headerName: 'Image',
        cellRenderer: ImageUrlRendererer,
        editable: false,
        filter: false,
        sortable: false,
        width: 130,
    },
    {
        field: 'model',
        editable: false,
    },
    {
        field: 'date',
        editable: false,
    },
    {
        field: 'interest',
        editable: false,
    },
    {
        field: 'vin',
        width: 250,
        editable: false,
    },
    {
        field: 'purchaseIntention',
        editable: false,
    },
    {
        field: 'status',
        editable: false,
    },
    {
        field: 'comment',
        filter: false,
        width: 500,
    },
    {
        field: 'leadId',
        headerName: 'More',
        cellRenderer: ButtonRenderer,
        editable: false,
        sortable: false,
        filter: false,
    },
];

// Configurations applied to all columns
const defaultColDef = {
    filter: true,
    editable: true,
};

export default function AgGridPage() {
    return (
        <div style={{ height: '80vh' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                pagination={true}
                theme={pdsTheme}
            />
        </div>
    );
};
