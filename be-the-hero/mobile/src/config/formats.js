import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

const formats = {
    currency:Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format
}

export default formats
