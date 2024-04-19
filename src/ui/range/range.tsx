import * as Slider from '@radix-ui/react-slider';
import * as stylex from '@stylexjs/stylex';
import { styles } from './range.styles';

export type RangeComponentValue = [number, number];

type RangeComponentProps = {
    values: RangeComponentValue;
    currentValue: RangeComponentValue;
    onValueChange: (arg1: RangeComponentValue) => void;
};

const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);

export const RangeComponent = ({ values, currentValue, onValueChange }: RangeComponentProps) => {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.input_number_group)}>
                <input
                    value={formatPrice(currentValue[0])}
                    onChange={(e) => onValueChange([Number(e.target.value), currentValue[1]])}
                    type='text'
                    name=''
                    {...stylex.props(styles.input_number)}
                />
                <div {...stylex.props(styles.divider)}></div>
                <input
                    value={formatPrice(currentValue[1])}
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
