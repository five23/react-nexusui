import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { OscilloscopeProps, OscilloscopeChange } from "../types";
import { getId } from "../utils";

export const Oscilloscope = React.memo(function Oscilloscope({
  size = [640, 480],
}: OscilloscopeProps) {
  let osc = React.useRef<null | Nexus.Oscilloscope>(null);
  let elementId = React.useRef(`nexus-ui-pan-${getId()}`);
  React.useEffect(() => {
    osc.current = new Nexus.Oscilloscope(elementId.current, { size });
    return () => {
      osc.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (osc.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    osc.current.resize(...size);
  }, size);
  return <div id={elementId.current} />;
});
