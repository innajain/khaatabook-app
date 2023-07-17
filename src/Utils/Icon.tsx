type IconPropTypes = {
  val: string;
  onClick: () => void;
};
export function Icon({ val = "mood", onClick = () => {} }: IconPropTypes) {
  onClick();
  console.log("first")
  return <span className="material-symbols-outlined">{val}</span>;
}
