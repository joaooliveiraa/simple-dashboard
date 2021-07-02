import { RadialChart } from "react-vis";

export function Chart() {
  const myData = [{ angle: 1, label: 'Label 1', subLabel:'sub'}, { angle: 5,  label: 'Label 2' }, { angle: 2,  label: 'Label 3' }];
  return <RadialChart data={myData} width={600} height={400} />;
}
