import { isProd } from '@root/shared/env'
import type { CSSProperties } from 'react'
import { name } from '@root/package.json'
import { styleObjectToString } from '@minko-fe/style-object-to-string'

function logClientInfo() {
  interface Log {
    text: string
    style?: CSSProperties
  }

  const colors = {
    blue: '#3B82F6',
    red: '#EF4444',
    green: '#10B981',
    gray: '#6B7280',
  }

  function log(title: Log, value: Log) {
    const nameStyle: CSSProperties = {
      background: '#FF9800',
      borderRadius: '4px',
      padding: '2px 4px',
      marginRight: '4px',
      fontWeight: '700',
    }
    const defaultTitleStyle: CSSProperties = {
      color: '#fff',
      paddingLeft: '6px',
      borderRadius: '4px 0 0 4px',
      background: '#9CA3AF',
    }

    const defaultValueStyle: CSSProperties = {
      color: '#fff',
      paddingRight: '6px',
      borderRadius: '0 4px 4px 0',
      background: '#3B82F6',
    }
    console.log(
      `%c${name}%c${title.text} %c ${value.text}`,
      `${styleObjectToString(nameStyle)}`,
      `${styleObjectToString({
        ...defaultTitleStyle,
        ...title.style,
      })}`,
      `${styleObjectToString({
        ...defaultValueStyle,
        ...value.style,
      })}`,
    )
  }

  log(
    {
      text: 'Build Date',
    },
    { text: __APP_INFO__.lastBuildTime },
  )

  const envStyle = (): CSSProperties => {
    if (isProd()) {
      return {
        background: colors.green,
      }
    }
    return {
      background: colors.blue,
    }
  }
  log({ text: 'Env' }, { text: import.meta.env.MODE, style: envStyle() })
}

export function onClientInit() {
  logClientInfo()
}
