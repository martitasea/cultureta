import React, {FC, SyntheticEvent} from 'react';

import SectionTitle from '../../components/SectionTitle';

import Box from '@mui/material/Box';
import {TYPE_CATEGORIZER} from '../../config';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import {ChangedTypes} from '../../domain/entities/common';

export type SidePanelTypeProps = {
  changedTypes: ChangedTypes,
  selectedTypes: Array<string>,
  onSelectedTypesChanged: (type: Array<string>) => void
};


const SidePanelType: FC<SidePanelTypeProps> = ({changedTypes, selectedTypes, onSelectedTypesChanged}) => {

  const handleSelectedItemsChange = (e: SyntheticEvent, ids: string[]) => {
    onSelectedTypesChanged(ids);
  };

  return <>
    <SectionTitle titleKey={'type'}/>
    <Box sx={{ width: 250 }}>
      <SimpleTreeView multiSelect={true} onSelectedItemsChange={handleSelectedItemsChange} selectedItems={selectedTypes}>
        {
          TYPE_CATEGORIZER.map(category =>
            <TreeItem key={category.id} itemId={category.id} sx={{
              /*'& .MuiTreeItem-iconContainer': {display: 'none !important'},*/
              '& .Mui-selected': {color: 'primary.main', fontWeight: 'bold'}
            }}
            label={
              <Stack sx={{flexDirection: 'row', alignItems: 'flex-start', gap: 1}}>
                <AddCircleIcon sx={{color: category.color, mt: 0.5}}/>
                <Typography variant="overline" sx={{fontWeight: 700}}>{category.label}</Typography>
              </Stack>
            }
            disabled={category.types.every(type => changedTypes.unUsedOccurrences.includes(type))}
            >
              {
                category.types.map((type, index) =>
                  <TreeItem key={index} itemId={type} label={<Typography sx={{fontSize: 14}}>{type}</Typography>}
                    sx={{ml: 5}} disabled={changedTypes.unUsedOccurrences.includes(type)}
                  />
                )
              }
            </TreeItem>
          )
        }
      </SimpleTreeView>
    </Box>
    {/*<SwitchPad categories={types} selected={typeSelected} onSelectionChange={onTypeChange} sx={styles.switchPad}/>*/}
  </>;
};

export default SidePanelType;
