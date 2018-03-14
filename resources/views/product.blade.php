@extends('layouts.shop')
@section('title', $product->name)

  <!-- Breadcrumbs -->
  <nav aria-label="breadcrumb" class="breadcrumbs d-none d-md-block">
    <div class="container-fluid">
      <ol class="breadcrumb">
        <div class="container" style="display: flex; flex-wrap: wrap;">
         <li class="breadcrumb-item">
           <a href="{{ route('welcome') }}">Home</a>
         </li>
         <li class="breadcrumb-item">
           <a href="{{ route('shop.index') }}">Shop</a>
         </li>
         <li class="breadcrumb-item active" aria-current="page">Macbook-Pro</li>

         {{-- Search Box --}}
         <form class="form-inline my-2 my-lg-0 mr-lg-3 ml-auto">
           <div class="input-group">
             <input class="form-control rounded-left pr-5" type="text" placeholder="Search for...">
             <span class="input-group-append">
               <button class="btn btn-primary rounded-right" type="button">
                 <i class="fa fa-search"></i>
               </button>
             </span>
           </div>
         </form>

        </div>
      </ol>
    </div>
  </nav>

@section('content')

  <article class="bg-light border border-info">
    <div class="container h-85 border border-danger">
      <div class="row h-85 border-wide">

        <div class="col-sm-6 col-lg-5 border border-gray-500 d-flex">
          <img src="{{ asset('img/products/'.$product->slug.'.png') }}" alt="Product" class="img-fluid m-auto"/>
        </div>
        <div class="col-sm-6 col-lg-5 offset-lg-1 mx-auto">
          <div class="card border-0">
            <div class="card-body bg-light product-info">
              <a href="#" class="tooltip-test" data-toggle="tooltip" data-placement="top" title="{{ $product->details }}"><h1 class="card-title mb-4">{{ $product->name }}</h1></a>
              <h2 class="card-subtitle mb-2 text-muted">{{ $product->details }}</h2>
              <h3 class="">{{ $product->presentPrice() }}</h3>
              <p class="card-text mb-4 d-none d-md-block">{{ $product->description }}</p>
              <a href="#" class="btn btn-primary rounded" role="button">Add to Cart</a>
            </div>
          </div>
        </div>

    </div>
  </div>
</article>


<!-- Small modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal yeah</button>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>


<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">

</button>

{{-- <a href="#" class="tooltip-test" data-toggle="tooltip" data-placement="top" title="Tooltip">Tooltip</a> --}}












@endsection
