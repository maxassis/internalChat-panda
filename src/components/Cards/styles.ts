import { css } from '../../../styled-system/css'

export const Chats = css({
  '& .item': {
    padding: '12px',
    blockSize: '64px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderBlockEnd: '1.5px solid #E7E7E7',
    cursor: 'pointer',
    _hover: {
      backgroundColor: '#F6F6F6'
    },

    '& .avatar': {
      inlineSize: '40px',
      blockSize: '40px',
      borderRadius: '50%'
    },

    '& .info': {
      inlineSize: '220px',
      '& h3': {
        fontSize: '15px',
        lineHeight: '110%',
        color: '#212529',
        fontFamily: 'Roboto", sans-serif',
        fontWeight: '600'
      },

      '& p': {
        fontSize: '13px',
        lineHeight: '110%',
        color: '#787878',
        fontFamily: 'Nunito, sans-serif',
        fontWeight: '500',
        paddingBlockStart: '4px',
        overflow: 'hidden',
        maxInlineSize: '160px',
        textOverflow: 'ellipsis',
        inlineSize: 'fit-content',
        whiteSpace: 'nowrap'
      }
    },

    '& .time': {
      display: 'flex',
      paddingBlockStart: '40px',
      fontSize: '11px',
      lineHeight: '110%',
      color: '#787878',
      fontFamily: 'Nunito, sans-serif',
      fontWeight: '600',

      '& svg': {
        marginInlineStart: '4px'
      }
    }
  }
})
