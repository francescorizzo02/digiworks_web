export default function buildSorter(sorter: any) {
  //declaration spot
  let field = sorter.field;
  let order = sorter.order;
  
  if(!order) {
    return ;
  }

  return order === "ascend" ? field : `-${field}`;
}