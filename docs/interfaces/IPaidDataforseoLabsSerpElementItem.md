[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IPaidDataforseoLabsSerpElementItem

# Interface: IPaidDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlinks information for the target website

#### Defined in

main.ts:100353

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Defined in

main.ts:100310

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Defined in

main.ts:100349

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:100308

***

### description\_rows?

> `optional` **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Defined in

main.ts:100319

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:100306

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:100340

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:100330

***

### extra?

> `optional` **extra**: `object`

additional information about the result

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:100316

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

main.ts:100314

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:100335

***

### links?

> `optional` **links**: [`AdLinkElement`](../classes/AdLinkElement.md)[]

link of the element

#### Defined in

main.ts:100321

***

### main\_domain?

> `optional` **main\_domain**: `string`

primary domain name in SERP

#### Defined in

main.ts:100323

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:100300

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:100296

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Defined in

main.ts:100344

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:100293

***

### rank\_info?

> `optional` **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Defined in

main.ts:100355

***

### relative\_url?

> `optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Defined in

main.ts:100325

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:100351

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:100304

***

### url?

> `optional` **url**: `string`

URL link

#### Defined in

main.ts:100312

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:100302
