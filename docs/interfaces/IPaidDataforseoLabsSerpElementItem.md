[**Documentation**](../README.md)

***

[Documentation](../README.md) / IPaidDataforseoLabsSerpElementItem

# Interface: IPaidDataforseoLabsSerpElementItem

Defined in: main.ts:108108

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

Defined in: main.ts:108160

backlinks information for the target website

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:108116

breadcrumb of the Ad element in SERP

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:108156

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:108114

description of the results element in SERP

***

### description\_rows?

> `optional` **description\_rows**: `string`[]

Defined in: main.ts:108125

extended description
if there is none, equals null

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:108112

domain where a link points

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:108147

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:108137

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

***

### extra?

> `optional` **extra**: `object`

Defined in: main.ts:108122

additional information about the result

#### Index Signature

\[`key`: `string`\]: `string`

***

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:108120

words highlighted in bold within the results description

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

Defined in: main.ts:108142

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

***

### links?

> `optional` **links**: [`AdLinkElement`](../classes/AdLinkElement.md)[]

Defined in: main.ts:108128

links featured in the math_solver element
if there are none, equals null

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:108130

primary domain name in SERP

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21703

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`position`](IBaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21699

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](IBaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

Defined in: main.ts:108151

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21696

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_group`](IBaseDataforseoLabsSerpElementItem.md#rank_group)

***

### rank\_info?

> `optional` **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

Defined in: main.ts:108162

page and domain rank information

***

### relative\_url?

> `optional` **relative\_url**: `string`

Defined in: main.ts:108132

URL in SERP that does not specify the HTTPs protocol and domain name

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:108158

search engine type

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:108110

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21693

type of element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`type`](IBaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:108118

relevant URL of the Ad element in SERP

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21705

the XPath of the element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`xpath`](IBaseDataforseoLabsSerpElementItem.md#xpath)
