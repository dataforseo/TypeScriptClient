**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IPaidDataforseoLabsSerpElementItem

# Interface: IPaidDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks\_info?

> **`optional`** **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlinks information for the target website

#### Source

main.ts:96499

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Source

main.ts:96461

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:96459

***

### description\_rows?

> **`optional`** **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Source

main.ts:96470

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Source

main.ts:96457

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Source

main.ts:96491

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Source

main.ts:96481

***

### extra?

> **`optional`** **extra**: `Object`

additional information about the result

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:96467

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Source

main.ts:96465

***

### impressions\_etv?

> **`optional`** **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Source

main.ts:96486

***

### links?

> **`optional`** **links**: [`AdLinkElement`](../classes/AdLinkElement.md)[]

link of the element

#### Source

main.ts:96472

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

primary domain name in SERP

#### Source

main.ts:96474

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:96451

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:96447

***

### rank\_changes?

> **`optional`** **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Source

main.ts:96495

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:96444

***

### rank\_info?

> **`optional`** **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Source

main.ts:96501

***

### relative\_url?

> **`optional`** **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Source

main.ts:96476

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:96497

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:96455

***

### url?

> **`optional`** **url**: `string`

relevant URL of the Ad element in SERP

#### Source

main.ts:96463

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:96453
