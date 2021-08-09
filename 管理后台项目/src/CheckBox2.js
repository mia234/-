
import { Checkbox } from 'antd';
import React from 'react'

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['市场活动',
                        '产研',
                     '售前交付',
                     '行业生态',
                     '商务销售',
                     '其他来源'];

const defaultCheckedList = [];

const CheckBox2 = () => {
    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <div className='checkbox-2'>
            线索来源 ：
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                全部
            </Checkbox>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />

        </div>
    );
};

export default CheckBox2