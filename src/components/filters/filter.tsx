import * as React from "react";
import { IFilter } from "../../models/view/IFilter";
import { Filter } from "./styles";

function handler(fn: (filter: IFilter) => void, name: string, value: string) {
  return function innerFunction(ev: React.MouseEvent) {
    fn({
      name,
      value
    } as IFilter);
  };
}

const filter: React.SFC<IFilter> = ({
  name,
  value,
  selectFilter,
  selected
}) => {
  return (
    <Filter
      selected={selected}
      className={`${selected ? "selected is-active" : ""}`}
      onClick={handler(selectFilter, name, value)}
    >
      <a href="javascript:void(0);" role="button">{name}</a>
    </Filter>
  );
};

export default filter;
