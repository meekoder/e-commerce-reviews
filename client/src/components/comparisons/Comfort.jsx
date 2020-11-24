import React, { useContext } from 'react';
import styled from 'styled-components';
import ReviewContext from '../ReviewContext';
import styles from '../../../styles.css';

const Bar = styled.div`
  height: 4px;
  background-color: #767677;
  position: relative;
`;

const Triangle = styled.div`
  border-top-color: #2ada71;
  transform: translateX(-50%);
  left: ${(props) => props.average}%;
  background-color: transparent;
  position: absolute;
  height: auto;
  top: -8px;
  width: 0;
  border-color: #2ada71 transparent transparent;
  border-style: solid;
  border-width: 20px 10px;
  z-index: 3;
`;

const Title = styled.div`
  font-size: 13px;
  font-family: 'AdihausDIN';
  font-weight: 400;
  margin-bottom: 7px;
  letter-spacing: 2px;
`;

const Gaps = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const Gap = styled.div`
  background-color: #fff;
  height: 4px;
  width: 4px;
  top: 0;
  z-index: 2;
  position: absolute;
`;

const Comparison = styled.div`
  margin-top: 20px;
`;

const BarLabels = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 2px;
  font-size: 11px;
  font-family: 'AdihausDIN';
  margin-top: 10px;
`;

function Comfort() {
  const { averageComfort } = useContext(ReviewContext);
  const avg = averageComfort * 20;

  return (
    <Comparison>
      <Title>COMFORT</Title>
      <Bar>
        <Triangle average={avg} />
        <Gaps>
          <Gap id={styles.gap2} />
          <Gap id={styles.gap3} />
          <Gap id={styles.gap4} />
        </Gaps>
      </Bar>
      <BarLabels>
        <span>UNCOMFORTABLE</span>
        <span>COMFORTABLE</span>
      </BarLabels>
    </Comparison>
  );
}

export default Comfort;
