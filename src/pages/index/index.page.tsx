import {
  Button,
  Calendar,
  Card,
  DatePicker,
  Divider,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Space,
  Table,
  TimePicker,
  Transfer,
} from 'antd'
import { useTranslation } from 'react-i18next'
import { useGlobalContext } from '@root/renderer/global/useGlobalContext'
import dayjs from 'dayjs'
import { useI18next } from '@/hooks/useI18next'
import { Link } from '@/components/Link'

const { Option } = Select
const { RangePicker } = DatePicker

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
]

export function Page() {
  const { setTheme, setDirection, theme, direction, locale } = useGlobalContext()

  const { changeLocale } = useI18next()

  const { t } = useTranslation()

  const [modal, contextHolder] = Modal.useModal()

  const info = () => {
    modal.info({
      title: t('home.hello'),
      content: t('home.name'),
    })
  }

  return (
    <>
      <Card title='index-example'>
        <div className='flex flex-col space-y-6 pb-6'>
          <div className='flex items-center space-x-4'>
            <span>{t('home.changeLocale')}</span>
            <Radio.Group
              onChange={(e) => {
                changeLocale(e.target.value)
              }}
              value={locale}
            >
              <Radio.Button key='en' value='en'>
                English
              </Radio.Button>
              <Radio.Button key='zh' value='zh'>
                中文
              </Radio.Button>
              <Radio.Button key='zh-tw' value='zh-TW'>
                繁体
              </Radio.Button>
            </Radio.Group>
          </div>

          <div className='flex items-center space-x-4'>
            <span>{t('home.changeTheme')}</span>
            <Radio.Group
              onChange={(e) => {
                setTheme(e.target.value)
              }}
              value={theme}
            >
              <Radio.Button key='light' value='light'>
                light
              </Radio.Button>
              <Radio.Button key='dark' value='dark'>
                dark
              </Radio.Button>
            </Radio.Group>
          </div>

          <div className='flex items-center space-x-4'>
            <span>{t('home.changeDirection')}</span>
            <Radio.Group
              onChange={(e) => {
                setDirection(e.target.value)
              }}
              value={direction}
            >
              <Radio.Button key='ltr' value='ltr'>
                LTR
              </Radio.Button>
              <Radio.Button key='rtl' value='rtl'>
                RTL
              </Radio.Button>
            </Radio.Group>
          </div>

          <Divider plain />

          <Button type='link'>
            <Link href='/pageA'>{t('home.toPageA')}</Link>
          </Button>

          <Space>
            {t('home.hello')}
            {t('home.name')}
            <span className='text-colorPrimary'>{t('home.complex.fisrt')}</span>
            <p>{t('home.complex.second')}</p>
            <span>{t('home.complex.something', { x: '特别的翻译' })}</span>
          </Space>
        </div>

        <div className='locale-components'>
          <div className='my-4'>
            <Pagination defaultCurrent={1} total={50} showSizeChanger />
          </div>
          <div className='my-4'>
            <Select showSearch style={{ width: 200 }}>
              <Option value='jack'>jack</Option>
              <Option value='lucy'>lucy</Option>
            </Select>
            <DatePicker />
            <TimePicker />
            <RangePicker style={{ width: 200 }} />
          </div>
          <div className='my-4 space-x-4'>
            <Button onClick={info}>{t('home.openModal')}</Button>
            <Popconfirm title={t('home.hello')}>
              <a href='#'>{t('home.confirm')}</a>
            </Popconfirm>
          </div>
          <div className='my-4'>
            <Transfer dataSource={[]} showSearch targetKeys={[]} />
          </div>
          <div className='site-config-provider-calendar-wrapper'>
            <Calendar fullscreen={false} value={dayjs()} />
          </div>
          <div className='my-4'>
            <Table dataSource={[]} columns={columns} />
          </div>
        </div>
        {contextHolder}
      </Card>
    </>
  )
}
