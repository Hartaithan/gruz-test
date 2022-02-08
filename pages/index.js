import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

export async function getServerSideProps() {
  const props = {
    id: 1,
    options: {
      params: {
        fields: {
          isDynamic: true,
        },
      },
    },
    count: 0,
    color: "red",
    data: { message: "Hello from SSR!" },
  };
  console.info(props.data.message);
  return {
    props: props,
  };
}

export default function Page({ id, options, count, color, data }) {
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
      <p>{data.message}</p>
      <Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid>{summ}</Grid>
      </Grid>
    </>
  );
}
