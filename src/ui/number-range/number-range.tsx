import * as Slider from '@radix-ui/react-slider';
import * as stylex from '@stylexjs/stylex';
import { styles } from './number-range.styles';

export type NumberRangeComponentValue = [number, number];

type NumberRangeComponentProps = {
    values: NumberRangeComponentValue;
    currentValue: NumberRangeComponentValue;
    onValueChange: (arg1: NumberRangeComponentValue) => void;
};

const NumberRangeComponent = ({ values, currentValue, onValueChange }: NumberRangeComponentProps) => {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.input_number_group)}>
                <input
                    value={currentValue[0]}
                    onChange={(e) => onValueChange([Number(e.target.value), currentValue[1]])}
                    type='text'
                    name=''
                    {...stylex.props(styles.input_number)}
                />
                <div {...stylex.props(styles.divider)}></div>
                <input
                    value={currentValue[1]}
                    onChange={(e) => onValueChange([currentValue[0], Number(e.target.value)])}
                    type='text'
                    name=''
                    {...stylex.props(styles.input_number)}
                />
            </div>
            <Slider.Root
                value={currentValue}
                onValueChange={(newValue: [number, number]) => onValueChange(newValue)}
                min={values[0]}
                max={values[1]}
                step={1}
                minStepsBetweenThumbs={1}
                {...stylex.props(styles.slider_root)}>
                <Slider.Track {...stylex.props(styles.slider_track)}>
                    <Slider.Range {...stylex.props(styles.slider_range)} />
                </Slider.Track>
                <Slider.Thumb {...stylex.props(styles.slider_thumb)} />
                <Slider.Thumb {...stylex.props(styles.slider_thumb)} />
            </Slider.Root>
        </div>
    );
};

export default NumberRangeComponent;
