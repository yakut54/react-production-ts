import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const { className } = props
	const { toggleTheme, theme } = useTheme()

	return (
		<Button
			theme={ThemeButton.CLEAR}
			onClick={toggleTheme}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	)
}
