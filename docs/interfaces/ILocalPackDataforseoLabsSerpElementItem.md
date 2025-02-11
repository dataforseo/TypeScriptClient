[**Documentation**](../README.md)

***

[Documentation](../README.md) / ILocalPackDataforseoLabsSerpElementItem

# Interface: ILocalPackDataforseoLabsSerpElementItem

Defined in: main.ts:107509

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:107552

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:107513

description of the results element in SERP

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:107515

domain where a link points

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:107543

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:107533

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

Defined in: main.ts:107538

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:107521

indicates whether the element is an ad

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:107526

primary domain name in SERP

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:107517

phone number

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

Defined in: main.ts:107547

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

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:107524

the item’s rating 
the popularity rate based on reviews and displayed in SERP

***

### relative\_url?

> `optional` **relative\_url**: `string`

Defined in: main.ts:107528

URL in SERP that does not specify the HTTPs protocol and domain name

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:107511

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

Defined in: main.ts:107519

relevant URL of the Ad element in SERP

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21705

the XPath of the element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`xpath`](IBaseDataforseoLabsSerpElementItem.md#xpath)
