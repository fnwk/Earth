import Info from "./Info/Index";
import theme from "@/styles/theme";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
      <div className="column left">
        <Info
          theme={theme.info.large}
          borderLength={120}
          title="Planet"
          text="EARTH"
        />
        <Info borderLength={60} title="size" text="510 100 000 km²" />
      </div>
      <div className="column right">
        <Info borderLength={75} title="galaxy" text="MILKY WAY" />
        <Info borderLength={105} title="population" text="8 000 000 000" />
      </div>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-block: 7vmin;
  padding-inline: 10vmin;
  display: flex;
  justify-content: space-between;

  .column {
    display: flex;
    flex-direction: column;

    &.left {
      text-align: left;
      justify-content: space-between;
    }

    &.right {
      text-align: right;

      hr {
        float: right;
      }
    }
  }
`;
