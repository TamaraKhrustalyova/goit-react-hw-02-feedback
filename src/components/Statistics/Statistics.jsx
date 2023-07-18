import PropTypes from 'prop-types';
import { normalizeText } from 'components/utils/NormalizeText';
import {StatItem} from './Statistics.Styled'

export const Statistics = props => {
    return (
        <ul>
            {Object.keys(props).map(item => {
                return (
                    <StatItem key={item}> 
                        {normalizeText(item)}: {props[item]}
                    </StatItem>  
                );
            })}
        </ul>
    );
};


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
  };