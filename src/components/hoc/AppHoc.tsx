import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

/**
 * To resuse the functionality
 * 
 * One way to lift the logic to parent component and pass as props
 * but we end up with props drilling.
 * 
 * 
 * To share common functionality between components
 * 
 * A pattern where a function takes a component as an argument and returns a new component.
 * An HOC adds an additional data or functionality to the original component.
 * So the new component is also referred as an enhanched component.
 * 
 * const NewComponent = higherOrderComponent(originalComponent)
 * 
 * Non-technical view
 * const IronMan = withSuit(TonyStark) TonyStark with suit become ironman.
 */

export const AppHoc = () => {
  return <div>
    <ClickCounter name="suri" />
    <HoverCounter />
  </div>;
};
