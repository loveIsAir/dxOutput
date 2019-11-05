import request from '../axios'

// const base = '/BWActiveX/web/v1.0/SkKpd/'

//开票的服务器信息 查询开票限额
export function fetchInvoiceServeInfo (data) {
  return request({
    method: 'post',
    url: '/order-api/fiscalState/queryServerInfo',
    data
  })
}

//获取作废接口的服务器信息
export function fetchCancellationServeInfo (data) {
  return request({
    method: 'post',
    url: '/BWActiveX/web/v1.0/SkKpd/selectList',
    data
  })
}

//作废的服务器信息 url?
export function fetchCancelServeInfo (data) {
  return request({
    method: 'post',
    url: '/BWActiveX/web/v1.0/SkKpd/selectList',
    data
  })
}

//页面设置的服务器  url?
export function fetchPrintMarginServeInfo (data) {
  return request({
    method: 'post',
    url: '/BWActiveX/web/v1.0/SkKpd/selectList',
    data
  })
}

//打印机的服务器信息  url?
export function fetchPrintServeInfo (data) {
  return request({
    method: 'post',
    url: '/BWActiveX/web/v1.0/SkKpd/selectList',
    data
  })
}

//红字信息表的服务器信息
export function fetchRedServeInfo (data) {
  return request({
    method: 'post',
    url: '/BWActiveX/web/v1.0/SkKpd/selectList',
    data
  })
}
