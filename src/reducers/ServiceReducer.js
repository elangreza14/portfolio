export const ServiceReducer = srv => {
  switch (srv) {
    case 'driver':
      return process.env.NEXT_PUBLIC_DRIVER_SRV
    case 'order':
      return process.env.NEXT_PUBLIC_ORDER_SRV
    case 'dx':
      return process.env.NEXT_PUBLIC_DX_SRV
    default:
      return '/'
  }
}
