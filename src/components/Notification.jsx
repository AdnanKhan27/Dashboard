import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Button } from '../components';

import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {

  const { currentColor } = useStateContext();

  return (
    <div className="nav-items dark:bg-secondary-dark-bg bg-white right-1 top-16 px-8 py-4 box-border absolute w-96 rounded-xl">
    <div className="flex justify-between items-center">
      <p className="text-xl font-semibold dark:text-gray-300">Notifications</p>
      <TooltipComponent
        content="Close"
        position="BottomCenter"
      >
        <Button
        icon={<MdOutlineCancel />}
        color= {currentColor}
        bgHoverColor="bg-gray-200"
        size="2xl"
        borderRadius="50%"
      />
      </TooltipComponent>
    </div>
  </div>
  )
}

export default Notification;