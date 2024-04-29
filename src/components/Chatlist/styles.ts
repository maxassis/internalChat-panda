import { css } from '../../../styled-system/css'

export const TopBar = css({
  blockSize: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#EDEDED',
  padding: '12px',

  '& input': {
    border: 'none',
    outline: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    inlineSize: '216px',
    blockSize: '32px',
    padding: '8px 8px 8px 32px',
    background: `url('./public/images/search-icon.png') center left no-repeat #FFFFFF`,
    color: '#3D3D3D',
    font: '14px',
    '&::placeholder': {
      color: '#3D3D3D'
    }
  },
  '& svg': {
    cursor: 'pointer'
  }
})

export const FilterBar = css({
  inlineSize: '100%',
  blockSize: '50px',
  padding: '12px',
  border: '1.5px solid #E7E7E7',
  backgroundColor: '#F6F6F6',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  _hover: {
    '& .btnLeft': {
      opacity: '1'
    },

    '& .btnRight': {
      opacity: '1'
    }
  },

  '& .btnLeft': {
    opacity: '0',
    position: 'absolute',
    blockSize: '30px',
    backgroundColor: 'transparent',
    insetInlineStart: '5px',
    border: '0',
    transition: 'opacity 0.2s linear',
    padding: '5px 1px',
    cursor: 'pointer'
  },

  '& .btnRight': {
    opacity: '0',
    position: 'absolute',
    blockSize: '30px',
    backgroundColor: 'transparent',
    insetInlineEnd: '5px',
    border: '0',
    transition: 'opacity 0.2s linear',
    padding: '5px 1px',
    cursor: 'pointer'
  }
})

export const item = css({
  '& button': {
    border: '1.5px solid #E7E7E7',
    backgroundColor: '#F6F6F6',
    blockSize: '26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '13px',
    lineHeight: '110%',
    _hover: {
      backgroundColor: '#18B07A'
    }
  }
})

export const wrapperTabs = css({
  display: 'flex',
  overflow: 'auto',
  gap: '10px',
  alignItems: 'center',
  overflowX: 'hidden'
})

export const chatsWrapper = css({
  blockSize: 'calc(100dvh - 110px)',
  overflowY: 'scroll'
})
