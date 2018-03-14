@extends('layouts.welcome')
@section('content')

<header class="masthead text-white text-center">
  <div class="overlay"></div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6 ml-auto">
        {{-- <h1 class="mb-3" style="font-weight: 300;">E-Commerce Demo</h1> --}}
        <h1 class="mb-3">E-Commerce Demolititi</h1>
        <p>Includes multiple products, categories, a shopping cart<br />and a checkout system with Stripe integration</p>
      </div>
      <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
        {{-- <form>
          <div class="form-row">
            <div class="col-12 col-md-9 mb-2 mb-md-0">
              <input type="email" class="form-control form-control-lg" placeholder="Enter your email...">
            </div>
            <div class="col-12 col-md-3">
              <button type="submit" class="btn btn-block btn-lg btn-primary">Sign up!</button>
            </div>
          </div>
        </form> --}}
      </div>
    </div>
  </div>
</header>

<!-- Products Grid -->
<section class="bg-light text-center products" id="products">
  <div class="container">
    <div class="row mb-8">

    <div class="col-lg-10 mx-auto">
      <h2 class="mb-3">Latest Products</h2>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>

      @foreach ($products as $product)
      <div class="col-lg-4">
        <div class="mx-auto my-5">
          <a href="{{ route('shop.show', $product->slug) }}"><img src="{{ asset('img/products/'.$product->slug.'.png') }}" alt="Product"/></a>
          <br />
          <br />
          <h3>{{ $product->name }}</h3>
          <h4 class="lead mb-0">{{ $product->presentPrice() }}</h4>
        </div>
      </div>
      @endforeach
    </div>

    <a class="btn btn-primary btn-xl rounded mt-5" href="{{ route('shop.index') }}" role="button">View More Products</a>

  </div>
</section>

<!-- Image Showcases -->
<section class="showcase">
  <div class="container-fluid p-0">
    <div class="row no-gutters">

      <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('/../img/welcome/bg-showcase-1.jpg');"></div>
      <div class="col-lg-6 order-lg-1 my-auto showcase-text">
        <h2>Fully Responsive Design</h2>
        <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-lg-6 text-white showcase-img" style="background-image: url('/../img/welcome/bg-showcase-2.jpg');"></div>
      <div class="col-lg-6 my-auto showcase-text">
        <h2>Updated For Bootstrap 4</h2>
        <p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('/../img/welcome/bg-showcase-3.jpg');"></div>
      <div class="col-lg-6 order-lg-1 my-auto showcase-text">
        <h2>Easy to Use &amp; Customize</h2>
        <p class="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section class="testimonials text-center bg-light" id="testimonials">
  <div class="container">
    <h2 class="mb-5">What people are saying...</h2>
    <div class="row">
      <div class="col-lg-4">
        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
          <img class="img-fluid rounded-circle mb-3" src="{{asset('img/welcome/testimonials-1.jpg')}}" alt="">
          <h5>Margaret E.</h5>
          <p class="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
          <img class="img-fluid rounded-circle mb-3" src="{{asset('img/welcome/testimonials-2.jpg')}}" alt="">
          <h5>Fred S.</h5>
          <p class="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
          <img class="img-fluid rounded-circle mb-3" src="{{asset('img/welcome/testimonials-3.jpg')}}" alt="">
          <h5>Sarah	W.</h5>
          <p class="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="call-to-action text-white text-center" id="contact">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-xl-9 mx-auto">
        <h2 class="mb-4">Ready to get started? Sign up now!</h2>
      </div>
      <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
        <form>
          <div class="form-row">
            <div class="col-12 col-md-9 mb-2 mb-md-0">
              <input type="email" class="form-control form-control-lg rounded" placeholder="Enter your email...">
            </div>
            <div class="col-12 col-md-3">
              <button type="submit" class="btn btn-block btn-lg btn-primary rounded">Sign up!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
@endsection
