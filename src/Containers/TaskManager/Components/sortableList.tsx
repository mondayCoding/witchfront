
import * as React from 'react';
import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';

import SortItem from './sortItem';

//interface
import { IMissionItem } from '../../../interfaces';

const list = (props: any) => {

	return (
		<div className="flex-table">
			{props.items.map((mission: IMissionItem, index: number) => {
            const update = () => props.updateModal(index);
            const remove = () => props.removeItem(mission);
            const toggle = () => props.toggle(mission);
            return(
               <SortItem
                  key={`item-${index}`}
                  index={index}
                  mission={mission}
                  onActivation={update}
                  onRemove={remove}
                  toggle={toggle}
               />
            );
         })}
		</div>
	);
};

const SortableList = SortableContainer(list);

export default SortableList;
