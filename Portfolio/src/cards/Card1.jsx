import React from "react";
import AnimatedContent from "../components/AnimatedContent";
import "./Card1.css";
import AnimatedComponent from "../components/AnimatedComponents";
import FadeContent from "../components/FadeContent";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
function Card1() {
  return (
    <>
        <div className="card1-grid">
      <AnimatedComponent>
          <div>
            <AnimatedContent>
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div
                  className="cardDiv"
                  style={
                    {
                      // margin:"1rem 2rem 2rem 0"
                    }
                  }
                ></div>
              </SpotlightCard>
            </AnimatedContent>
          </div>

          <div>
            <FadeContent
              blur={true}
              duration={2500}
              easing="ease-out"
              initialOpacity={0}
            >
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div
                  className="cardDiv"
                  style={
                    {
                      // margin:"1rem 2rem 2rem 0"
                    }
                  }
                ></div>
              </SpotlightCard>
            </FadeContent>
          </div>

          <div>
            <AnimatedContent>
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div
                  className="cardDiv"
                  style={
                    {
                      // margin:"1rem 2rem 2rem 0"
                    }
                  }
                ></div>
              </SpotlightCard>
            </AnimatedContent>
          </div>
      </AnimatedComponent>
        </div>

        <div className="card1-grid">
      <AnimatedComponent>
          <div>
            <FadeContent
              blur={true}
              duration={2500}
              easing="ease-out"
              initialOpacity={0}
            >
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div
                  className="cardDiv"
                  style={
                    {
                      // margin:"1rem 2rem 2rem 0"
                    }
                  }
                ></div>
              </SpotlightCard>
            </FadeContent>
          </div>

          <div>
            <AnimatedContent>
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div
                  className="cardDiv"
                  style={
                    {
                      // margin:"1rem 2rem 2rem 0"
                    }
                  }
                ></div>
              </SpotlightCard>
            </AnimatedContent>
          </div>

          <div>
            <FadeContent
              blur={true}
              duration={2500}
              easing="ease-out"
              initialOpacity={0}
            >
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div
                  className="cardDiv"
                  style={
                    {
                      // margin:"1rem 2rem 2rem 0"
                    }
                  }
                ></div>
              </SpotlightCard>
            </FadeContent>
          </div>
      </AnimatedComponent>
        </div>
    </>
  );
}

export default Card1;
