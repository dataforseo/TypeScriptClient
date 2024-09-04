[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ILocalPackDataforseoLabsSerpElementItem

# Interface: ILocalPackDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Defined in

main.ts:99545

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:99506

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:99508

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:99536

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:99526

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:99531

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Defined in

main.ts:99514

***

### main\_domain?

> `optional` **main\_domain**: `string`

primary domain name in SERP

#### Defined in

main.ts:99519

***

### phone?

> `optional` **phone**: `string`

phone number

#### Defined in

main.ts:99510

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:99500

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:99496

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Defined in

main.ts:99540

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:99493

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:99517

***

### relative\_url?

> `optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Defined in

main.ts:99521

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:99504

***

### url?

> `optional` **url**: `string`

URL link

#### Defined in

main.ts:99512

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:99502
