import React, {ForwardedRef} from 'react';

interface PriceInputProps {
   name: string
}

const PriceInput = React.forwardRef(({name}: PriceInputProps, ref: ForwardedRef<HTMLInputElement> | null) => {

   return (<input
      ref={ref}
      className={"w-1/3 h-full rounded border-2 border-blue-300 p-2 md:w-full lg:p-1"}
      type="number"
      placeholder={name}
      min={0}
   />);
});

export default PriceInput;