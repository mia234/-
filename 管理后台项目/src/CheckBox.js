
import { Checkbox } from 'antd';
import React from 'react'

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['商超便利',
                        '百货',
                     '生鲜免税',
                     '酒水饮料',
                     '鞋服美妆',
                     '食品母婴餐饮',
                     '购物中心',
                     '3C家电',
                    '其他行业'];

const defaultCheckedList = ['', 'Orange'];

const CheckBox = () => {
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
        <div className='checkbox-1'>
            所属行业：
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                全部
            </Checkbox>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />

        </div>
    );
};

export default CheckBox