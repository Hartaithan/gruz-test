import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

export default function Page() {
  const id = 1;
  const options = {
    params: {
      fields: {
        isDynamic: true,
      },
    },
  };
  const count = 0;
  const color = "red";
  const data = {};
  return (
    <MyWonderfulComponent
      id={id}
      options={options}
      count={count}
      color={color}
      data={data}
    >
      I&apos;m text from a component
    </MyWonderfulComponent>
  );
}

function MyWonderfulComponent({ id, options, count, color, data, children }) {
  const [summ, setSumm] = useState(count);

  useEffect(() => {
    if (id && options.params.fields.isDynamic) {
      setSumm(summ + 1);
    }
  }, []); // eslint-disable-line

  const StyledH1 = styled("h1")({
    color: color,
  });

  return (
    <>
      <StyledH1>Hello World!</StyledH1>
      <Grid>
        <Grid xs={12}>{children}</Grid>
        <Grid>{summ}</Grid>
      </Grid>
    </>
  );
}
