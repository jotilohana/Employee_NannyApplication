import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
const DropDown=()=> {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Nannies', value: 'Nannies'},
    {label: 'Nannies1', value: 'Nannies1'},
    {label: 'Nannies2', value: 'Nannies2'}
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={{
      width:'100%',
      alignSelf:'center',
      margin:5
}}
    />
  );
}
export default DropDown;