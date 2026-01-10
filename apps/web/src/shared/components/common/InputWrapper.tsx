import { useState, cloneElement, type InputHTMLAttributes, type ReactElement } from 'react';
import { cn } from '@/shared/lib/cn';

type FocusableInputElement = ReactElement<InputHTMLAttributes<HTMLInputElement>>;

type InputState = 'default' | 'error' | 'success';
type VisualState = InputState | 'focus';

interface IBaseInputProps {
  state?: InputState;
  message?: string;
  rightSlot?: React.ReactNode;
  children: FocusableInputElement;
  className?: string;
}

const underlineByState: Record<VisualState, string> = {
  default: 'border-neutral-30',
  error: 'border-error-40',
  success: 'border-primary-40',
  focus: 'border-primary-40',
};

const messageByState: Record<VisualState, string> = {
  default: 'text-neutral-90',
  error: 'text-error-40',
  success: 'text-primary-40',
  focus: 'text-primary-40',
};

export const InputWrapper = ({
  state = 'default',
  message,
  rightSlot,
  children,
  className,
}: IBaseInputProps) => {
  const [focused, setFocused] = useState(false);

  const visualState: VisualState = state === 'default' ? (focused ? 'focus' : 'default') : state;

  const shouldShowMessage = visualState !== 'default' && Boolean(message);

  return (
    <div className={cn('flex flex-col gap-1 w-full', className)}>
      <div
        className={cn(
          'flex items-end h-10 gap-2 border-b-[1.2px] pb-2 caret-primary-40',
          underlineByState[visualState],
        )}
      >
        <div className="flex-1 body-14-medium">
          {cloneElement(children, {
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
          })}
        </div>
        {rightSlot}
      </div>

      {shouldShowMessage && (
        <p className={cn('caption-12-regular', messageByState[visualState])}>{message}</p>
      )}
    </div>
  );
};
