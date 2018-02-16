import * as React from 'react'
import Property from '../models/Property'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

interface Props {
  properties: Property[],
  onAddProperty: () => void
}
interface State {

}
const bopis = { "conditional": [ { "country": [ "AU" ], "value": "http://pages.ebay.com.au/help/policies/clickandcollect-terms.html" }, { "country": [ "GB" ], "value": "http://pages.ebay.co.uk/clickandcollect/terms.html" }, { "country": [ "US" ], "value": "http://pages.ebay.com/instorepickup/terms.html" }, { "isGBH": true, "value": "http://pages.ebay.com/instorepickup/terms.html" }, { "siteCode":[ "US", "DE" ], "value": "http://pages.ebay.com/instorepickup/terms.html" } ], "name": "BopisTermsLink", "type": "string", "original": "{${prefCountry} = 'AU': 'http://pages.ebay.com.au/help/policies/clickandcollect-terms.html', ${prefCountry} = 'GB': 'http://pages.ebay.co.uk/clickandcollect/terms.html', ${prefCountry} = 'US' | ${isGbh}: 'http://pages.ebay.com/instorepickup/terms.html'}" };
const deals = { "conditional": [ { "country": [ "US", "GB", "DE", "AU", "CA", "FR", "IT", "ES", "MY", "SG", "PH", "IN" ], "value": false } ], "name": "Deals", "type": "boolean", "value": false, "original": "${prefCountry} in 'US,GB,DE,AU,CA,FR,IT,ES,MY,SG,PH,IN'" };
const feed = { "conditional": [ { "country": [ "AU", "FR", "DE", "IT", "MY", "PH", "SG", "ES", "GB", "US" ], "value": true }, { "country": [ "CA" ], "language": [ "en" ], "value": true } ], "name": "Feed", "type": "boolean", "value": false, "original": "${prefCountry} in 'AU,FR,DE,IT,MY,PH,SG,ES,GB,US' | (${prefCountry} = 'CA' & ${prefLanguage} = 'en')" };
const itemTitleTranslationEnabled = { "conditional": [ { "country": [ "AU", "AT", "BE", "CA", "CA", "FR", "DE", "IE", "IT", "NL", "PL", "ES", "CH", "GB", "US" ], "value": true }, { "isGBH": true, "value": true } ], "name": "itemTitleTranslationEnabled", "type": "boolean", "value": false, "original": "${prefCountry} in('AU,AT,BE,CA,CA,FR,DE,IE,IT,NL,PL,ES,CH,GB,US') | ${isGbh}" };
const payments_payUponInvoiceEnabled = { "conditional": [ { "country": [ "DE" ], "value": true } ], "name": "payments_payUponInvoiceEnabled", "type": "boolean", "value": false, "original": "${prefCountry} = 'DE'" };
const rtm = { "conditional": [ { "country": [ "AU", "CA", "FR", "DE", "IT", "MY", "PH", "SG", "ES", "GB", "US" ], "value": true }, { "siteCode": [ "US", "DE" ], "value": true } ], "name": "RTM", "type": "boolean", "value": false, "original": "${prefCountry} in 'AU,CA,FR,DE,IT,MY,PH,SG,ES,GB,US'" };
const searchFollowSearchTooltipTimeout = { "name": "search.FollowSearchTooltipTimeout", "value": 14, "type": "number", "original": "14" };

export default class PropertiesList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  
  render() {
    const { properties } = this.props
    const out = [];
  
    for (let property of properties) {
      out.push(
        <TableRow selectable={true}>
        <TableRowColumn>{property.name}</TableRowColumn>
        <TableRowColumn>{property.description}</TableRowColumn>
        <TableRowColumn>{property.value}</TableRowColumn>
        <TableRowColumn>{property.value}</TableRowColumn>
        <TableRowColumn>{property.value}</TableRowColumn>
        <TableRowColumn>{property.value}</TableRowColumn>
      </TableRow>)
     }
    return (
      
      <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Property</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>5.8.0</TableHeaderColumn>
        <TableHeaderColumn>5.6.0</TableHeaderColumn>
        <TableHeaderColumn>5.5.0</TableHeaderColumn>
        <TableHeaderColumn>5.4.0</TableHeaderColumn> 
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>ca_filter</TableRowColumn>
        <TableRowColumn>Block category for this category not to go into search filter</TableRowColumn>
        <TableRowColumn>${'{ca_filter'}} in country 'US, CA, DE,GB'</TableRowColumn>
        <TableRowColumn>${'{ca_filter'}} in country 'US, CA, DE,GB'</TableRowColumn>
        <TableRowColumn>${'{ca_filter'}} in country 'US, CA, DE,GB'</TableRowColumn>
        <TableRowColumn>${'{ca_filter'}} in country 'US'</TableRowColumn>
      </TableRow>
      <TableRow selectable={true}>
        <TableRowColumn>show_button</TableRowColumn>
        <TableRowColumn>Enable will show button to add into category</TableRowColumn>
        <TableRowColumn>disable</TableRowColumn>
        <TableRowColumn>disable</TableRowColumn>
        <TableRowColumn>enable</TableRowColumn>
        <TableRowColumn>enable</TableRowColumn>
      </TableRow>
      <TableRow selectable={true}>
        <TableRowColumn>BopisTermsLink</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>{JSON.stringify(bopis)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(bopis)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(bopis)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(bopis)}</TableRowColumn>
      </TableRow>
      <TableRow selectable={true}>
        <TableRowColumn>Deals</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>{JSON.stringify(deals)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(deals)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(deals)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(deals)}</TableRowColumn>
      </TableRow>
      <TableRow selectable={true}>
        <TableRowColumn>Feed</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>{JSON.stringify(feed)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(feed)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(feed)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(feed)}</TableRowColumn>
      </TableRow>
      <TableRow selectable={true}>
        <TableRowColumn>itemTitleTranslationEnabled</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>{JSON.stringify(itemTitleTranslationEnabled)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(itemTitleTranslationEnabled)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(itemTitleTranslationEnabled)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(itemTitleTranslationEnabled)}</TableRowColumn>
      </TableRow>
      <TableRow selectable={true}>
        <TableRowColumn>payments_payUponInvoiceEnabled</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>{JSON.stringify(payments_payUponInvoiceEnabled)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(payments_payUponInvoiceEnabled)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(payments_payUponInvoiceEnabled)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(payments_payUponInvoiceEnabled)}</TableRowColumn>
      </TableRow>
      <TableRow selectable={true}>
        <TableRowColumn>RTM</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>{JSON.stringify(rtm)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(rtm)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(rtm)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(rtm)}</TableRowColumn>
      </TableRow>
      <TableRow selectable={true}>
        <TableRowColumn>search.FollowSearchTooltipTimeout</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>{JSON.stringify(searchFollowSearchTooltipTimeout)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(searchFollowSearchTooltipTimeout)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(searchFollowSearchTooltipTimeout)}</TableRowColumn>
        <TableRowColumn>{JSON.stringify(searchFollowSearchTooltipTimeout)}</TableRowColumn>
      </TableRow>
      {out}
    </TableBody>
  </Table>
    
    )
  }
}