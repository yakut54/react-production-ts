import { CSSProperties, useMemo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = (props: AvatarProps) => {
  const {
    className, src, size, alt,
  } = props

  const mods: Mods = {}
  const style = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size])

  return (
    <img
      alt={alt}
      src={src}
      style={style}
      className={classNames(cls.Avatar, mods, [className])}
    />
  )
}