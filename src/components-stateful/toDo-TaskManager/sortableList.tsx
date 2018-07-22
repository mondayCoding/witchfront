
import * as React from 'react';
import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';

import SortItem from './sortItem';

//interface
import { IMissionItem } from '../../interfaces';

const list = (props: any) => {

	return (
		<div className="flex-table">
			{props.items.map((mission: IMissionItem, index: number) => (
				<SortItem
					key={`item-${index}`}
					index={index}
					mission={mission}
					onActivation={() => props.updateModal(mission)}
					onRemove={() => props.removeItem(mission)}
					toggle={() => props.toggle(mission)}
				/>
			))}
		</div>
	);
};

const SortableList = SortableContainer(list);

export default SortableList;
