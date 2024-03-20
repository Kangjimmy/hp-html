import React from 'react';
import AddName from './components/09.eventAndHooks/AddName';
import PreventDefaultClick from './components/09.eventAndHooks/PreventDefaultClick';
import ChangeFont from './components/09.eventAndHooks/ChangeFont';
import EventOnChange from './components/09.eventAndHooks/EventOnChange';
import MultiInput from './components/09.eventAndHooks/MultiInput';
import NameForm from './components/09.eventAndHooks/NameForm';
import TextArea from './components/09.eventAndHooks/TextArea';
import Select from './components/09.eventAndHooks/Select';
import InsertImages from './components/09.eventAndHooks/InsertImages';
import SelectImage from './components/09.eventAndHooks/SelectImage';
import CheckBox from './components/09.eventAndHooks/CheckBox';
import Pr01 from './components/09.eventAndHooks/Pr01';
import Pr02 from './components/09.eventAndHooks/Pr02';
import Pr03 from './components/09.eventAndHooks/Pr03';

export default function HookApp() {
  return (
    <div>
      {/* <AddName /> */}
      {/* <PreventDefaultClick /> */}
      {/* <ChangeFont /> */}
      {/* <EventOnChange /> */}
      {/* <MultiInput /> */}
      {/* <NameForm /> */}
      {/* <TextArea /> */}
      {/* <Select /> */}
      {/* <InsertImages /> */}
      {/* <SelectImage /> */}
      {/* <CheckBox
        itemArr={[
          { name: 'cap', price: 10000 },
          { name: 'shose', price: 30000 },
          { name: 'bag', price: 80000 },
        ]}
      /> */}
      <Pr01 />
      <Pr02 />
      <Pr03 />
    </div>
  );
}
