[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonDeliveryInfo

# Class: AmazonDeliveryInfo

Defined in: main.ts:23611

## Implements

- [`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonDeliveryInfo()

> **new AmazonDeliveryInfo**(`data`?): [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

Defined in: main.ts:23629

#### Parameters

##### data?

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md)

#### Returns

[`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

## Properties

### delivery\_date\_from?

> `optional` **delivery\_date\_from**: `string`

Defined in: main.ts:23615

the earliest date when the product can be shipped

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_date_from`](../interfaces/IAmazonDeliveryInfo.md#delivery_date_from)

***

### delivery\_date\_to?

> `optional` **delivery\_date\_to**: `string`

Defined in: main.ts:23617

the latest date when the product can be delivered

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_date_to`](../interfaces/IAmazonDeliveryInfo.md#delivery_date_to)

***

### delivery\_message?

> `optional` **delivery\_message**: `string`

Defined in: main.ts:23613

message accompanying the delivery information as posted by the seller

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_message`](../interfaces/IAmazonDeliveryInfo.md#delivery_message)

***

### delivery\_price?

> `optional` **delivery\_price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:23625

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_price`](../interfaces/IAmazonDeliveryInfo.md#delivery_price)

***

### fastest\_delivery\_date\_from?

> `optional` **fastest\_delivery\_date\_from**: `string`

Defined in: main.ts:23619

the earliest date when the product can be delivered with a fast delivery option

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`fastest_delivery_date_from`](../interfaces/IAmazonDeliveryInfo.md#fastest_delivery_date_from)

***

### fastest\_delivery\_date\_to?

> `optional` **fastest\_delivery\_date\_to**: `string`

Defined in: main.ts:23621

the latest date when the product can be delivered with a fast delivery option

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`fastest_delivery_date_to`](../interfaces/IAmazonDeliveryInfo.md#fastest_delivery_date_to)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23638

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23660

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

Defined in: main.ts:23653

#### Parameters

##### data

`any`

#### Returns

[`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)
