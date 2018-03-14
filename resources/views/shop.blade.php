@extends('layouts.shop')
@section('title', '| Shop Home')


  <!-- Breadcrumbs -->
  <nav aria-label="breadcrumb" class="breadcrumbs d-flex">
    <div class="container-fluid">
      <ol class="breadcrumb">
        <div class="container" style="display: flex; flex-wrap: wrap;">
         <li class="breadcrumb-item">
           <a href="{{ route('welcome') }}">Home</a>
         </li>
         <li class="breadcrumb-item active" aria-current="page">Shop</li>

         <!-- Search Box -->
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

<div class="temporary-div">


    <div class="row">
      <div class="col-lg-3">
        <h4 class="mb-4 mt-3">By Category</h4>
      </div>
      <div class="col-lg-8">
        <hr />
        <h1 class="my-2">Featured</h1>
        <hr />
      </div>
    </div>

<div class="row">
  <div class="col-lg-3">
    <div class="list-group">
      <a href="#" class="list-group-item">Category 1</a>
      <a href="#" class="list-group-item">Category 2</a>
      <a href="#" class="list-group-item">Category 3</a>
      <a href="#" class="list-group-item">Category 4</a>
      <a href="#" class="list-group-item">Category 5</a>
      <a href="#" class="list-group-item">Category 6</a>
    </div>
  </div>
  <!-- /.col-lg-3 -->

  <div class="col-lg-9">
    <div class="row">
        @foreach ($products as $product)
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="mx-auto my-5 text-center">
                <a href="{{ route('shop.show', $product->slug) }}"><img src="{{ asset('img/products/'.$product->slug.'.png') }}" alt="Product"/></a>
                <br />
                <br />
                <a href="{{ route('shop.show', $product->slug) }}"><h2>{{ $product->name }}</h2></a>
                <h3 class="lead mb-0">{{ $product->presentPrice() }}</h3>
                </div>
              </div>
        @endforeach
    </div>
  </div>
  <!-- /.col-lg-9 -->

</div>
<!-- /.row -->

</div>

@endsection
