import { Box, Container } from '@mui/material';
import {
  DataGridPro,
  GridColDef,
  GridRowsProp,
  DataGridProProps,
  GridRowSelectionModel,
} from '@mui/x-data-grid-pro';

const columns: GridColDef[] = [
  { field: 'jobTitle', headerName: 'Job Title', width: 200 },
  {
    field: 'recruitmentDate',
    headerName: 'Recruitment Date',
    type: 'date',
    width: 150,
  },
];

const getTreeDataPath: DataGridProProps['getTreeDataPath'] = (row) => row.hierarchy;

interface Props {
  rowSelectionModel: GridRowSelectionModel, 
  setRowSelectionModel: (model: GridRowSelectionModel) => void
  rows: GridRowsProp
}

export default function App({ rowSelectionModel, setRowSelectionModel, rows }: Props) {
  return (
    <Container >
      <Box mt={2}>
        <DataGridPro
          treeData
          rows={rows}
          columns={columns}
          getTreeDataPath={getTreeDataPath}

          checkboxSelection
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
        />
      </Box>
    </Container>
  );
}

