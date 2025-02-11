[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductsTaskGetHtmlResultInfo

# Class: MerchantGoogleProductsTaskGetHtmlResultInfo

Defined in: main.ts:187494

## Implements

- [`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductsTaskGetHtmlResultInfo()

> **new MerchantGoogleProductsTaskGetHtmlResultInfo**(`data`?): [`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)

Defined in: main.ts:187518

#### Parameters

##### data?

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:187510

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:187514

elements of search results found on Google Shopping

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:187512

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:187497

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:187505

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:187503

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:187501

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:187499

type of element

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:187527

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:187555

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)

Defined in: main.ts:187548

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)
