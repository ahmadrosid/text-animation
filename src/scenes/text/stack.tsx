import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { Layout, Txt } from "@motion-canvas/2d/lib/components";
import { makeRef, range } from "@motion-canvas/core/lib/utils";
import { all, any, waitFor, waitUntil } from "@motion-canvas/core/lib/flow";

export default makeScene2D(function* (view) {
  const titles: Txt[] = [];

  view.add(
    <Layout direction={"column"}>
      {range(5).map((_, idx) => (
        <Txt
          ref={makeRef(titles, idx)}
          fill="#e6a700"
          position={[-700, -200 + idx * 100]}
          fontFamily={"Fira Code"}
        >
          Hello world
        </Txt>
      ))}
    </Layout>
  );

  yield* waitUntil("start");

  yield* all(
    ...titles.map((title, idx) => {
      const factor = 0.8 + idx * 0.05;
      return any(
        title.position.x(700, factor).to(-700, factor),
        title.fill("#e13238", 1).to("#e6a700", 1)
      );
    })
  );

  yield* waitFor(0.2);
});
