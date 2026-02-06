export interface OrdenCompraReceiveDTO {
  idOrdenCompra: number;
  fechaRecepcion: string;
  observacion?: string;
  idUsuario: number;
  detalles: DetalleRecepcionDTO[];
}

export interface DetalleRecepcionDTO {
  idInsumo: number;
  cantidadRecibida: number;
  observacionDetalle?: string;
}